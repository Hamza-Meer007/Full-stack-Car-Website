from rest_framework import serializers
from cars.models import Car, CarImage, CountryStock
from django.conf import settings


class CarImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = CarImage
        fields = ['id', 'image_url']
    
    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image:
            image_url = obj.image.url
            if request is not None:
                return request.build_absolute_uri(image_url)
            return image_url
        return None


class CarSerializer(serializers.ModelSerializer):
    # Keep the first image URL for backward compatibility
    image_url = serializers.SerializerMethodField()
    
    # Add all images
    images = serializers.SerializerMethodField()

    class Meta:
        model = Car
        fields = '__all__'

    def get_image_url(self, obj):
        request = self.context.get('request')
        first_image = obj.images.first()
        
        if first_image and first_image.image:
            image_url = first_image.image.url
            if request is not None:
                # Build complete URL including domain
                return request.build_absolute_uri(image_url)
            return image_url
        return None
    
    def get_images(self, obj):
        # Pass the request to the CarImageSerializer context
        request = self.context.get('request')
        images = obj.images.all()
        
        # Use CarImageSerializer for each image
        return CarImageSerializer(images, many=True, context={'request': request}).data
    
    


class CountryStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = CountryStock
        fields = ['id', 'name', 'code', 'flag_image']