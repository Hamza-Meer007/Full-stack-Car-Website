from django.contrib import admin
from django.utils.html import format_html
from cars.models import Car

class CarAdmin(admin.ModelAdmin):
    list_display = ('make', 'model', 'year', 'milage', 'price', 'is_sold', 'is_featured', 'display_image')
    list_filter = ('make', 'fuel_type', 'transmission', 'condition', 'is_sold', 'is_featured')
    search_fields = ('make', 'model', 'description', 'location')
    list_editable = ('price', 'is_sold', 'is_featured')
    readonly_fields = ('date_added', 'image_preview')
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'make', 'model', 'year', 'description', 'image', 'image_preview')
        }),
        ('Technical Specifications', {
            'fields': ('milage', 'fuel_type', 'transmission', 'engine_size', 'power', 
                      'doors', 'seats', 'drive_type', 'steering')
        }),
        ('Condition & History', {
            'fields': ('condition', 'color', 'is_imported', 'has_warranty', 'number_of_owners')
        }),
        ('Pricing & Listing Details', {
            'fields': ('price', 'is_negotiable', 'is_featured', 'date_added', 'is_sold')
        }),
        ('Location', {
            'fields': ('location',)
        }),
    )
    
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="300" height="auto" />', obj.image.url)
        return "No Image"
    
    image_preview.short_description = 'Image Preview'
    
    def display_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="50" height="auto" />', obj.image.url)
        return "No Image"
    
    display_image.short_description = 'Image'

admin.site.register(Car, CarAdmin)