from django.contrib import admin
from django.utils.html import format_html
from cars.models import Car, CarImage


class CarImageInline(admin.TabularInline):
    model = CarImage
    extra = 5  # Number of empty forms to display for uploading
    fields = ('image', 'image_preview')
    readonly_fields = ('image_preview',)
    
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="auto" />', obj.image.url)
        return "No Image"
    
    image_preview.short_description = 'Preview'
class CarAdmin(admin.ModelAdmin):
    inlines = [CarImageInline]
    list_display = ('make', 'model', 'year', 'milage', 'price', 'is_sold', 'is_featured', 'first_image_display')
    list_filter = ('make', 'fuel_type', 'transmission', 'condition', 'is_sold', 'is_featured')
    search_fields = ('make', 'model', 'description')
    list_editable = ('price', 'is_sold', 'is_featured')
    readonly_fields = ('date_added', )
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'make', 'model', 'year', 'description')
        }),
        ('Technical Specifications', {
            'fields': ('milage', 'fuel_type', 'transmission', 'engine_size', 'power', 'doors', 'seats', 'drive_type', 'steering')
        }),
        ('Condition & History', {
            'fields': ('condition', 'color', 'is_imported', 'has_warranty', 'number_of_owners')
        }),
        ('Pricing & Listing Details', {
            'fields': ('price', 'is_negotiable', 'is_featured', 'date_added', 'is_sold')
        }),
        ('Location', {
            'fields': ('country',)
        }),
    )
    
    def first_image_display(self, obj):
        # First check if there are multiple images
        first_image = obj.images.first()
        if first_image and first_image.image:
            return format_html('<img src="{}" width="50" height="auto" />', first_image.image.url)
        # Fallback to single image field if no multiple images
        elif obj.image:
            return format_html('<img src="{}" width="50" height="auto" />', obj.image.url)
        return "No Image"
    
    first_image_display.short_description = 'Image'

admin.site.register(Car, CarAdmin)