from rest_framework import serializers
from cars.models import Car
from django.conf import settings


class CarSerializer(serializers.ModelSerializer):
    # Add a field for the full image URL
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Car
        fields = '__all__'

    def get_image_url(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            else:
                # Fallback if request is not available
                return f"{settings.BASE_URL}{obj.image.url}"
        return None
