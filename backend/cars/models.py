from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone

# Create your models here.


class Car(models.Model):
    
    FUEL_TYPE = [
        ('Petrol', 'Petrol'),
        ('Diesel', 'Diesel'),
        ('Electric', 'Electric'),
        ('Hybrid', 'Hybrid'),
        ('LPG', 'LPG'),
    ]
    help_texts = {
            'title': 'Enter a descriptive title for the car listing (e.g., "2020 Toyota Camry - Low Mileage")',
            'make': 'Car manufacturer (e.g., Toyota, Honda, BMW)',
            'model': 'Car model name (e.g., Camry, Accord, X5)',
            'year': 'Year the car was manufactured',
            'description': 'Detailed description of the car\'s features, condition, and any additional information',
            'milage': 'Current mileage/kilometers on the odometer',
            'price': 'Asking price in your local currency',
            'fuel_type': 'Type of fuel the car uses',
            'transmission': 'Transmission type (Manual/Automatic)',
            'engine_size': 'Engine displacement (e.g., 2.0L, 1.8L)',
            'power': 'Engine power output (HP or kW)',
            'condition': 'Overall condition of the vehicle',
            'location': 'Where the car is located for viewing/pickup',
            'is_featured': 'Check to feature this car on the homepage',
            'is_sold': 'Mark as sold when the car is no longer available'
        }
    
    TRANSMISSION_CHOICES = [
        ('Automatic', 'Automatic'),
        ('Manual', 'Manual'),
        ('CVT', 'CVT'),
        ('Automatic', 'Semi-Automatic'),
    ]
    
    DRIVE_TYPE_CHOICES = [
        ('fwd', 'Front-Wheel Drive'),
        ('rwd', 'Rear-Wheel Drive'),
        ('awd', 'All-Wheel Drive'),
        ('4wd', '4-Wheel Drive'),
    ]
    
    CONDITION_CHOICES = [
        ('Excellent', 'Excellent'),
        ('Very Good', 'Very Good'),
        ('Good', 'Good'),
        ('Fair', 'Fair'),
        ('Poor', 'Poor'),
    ]

    STEERING_CHOICES = [
        ('right', 'Right-Hand Drive'),
        ('left', 'Left-Hand Drive'),
    ]
    
    # Basic Information
    title = models.CharField(max_length=200, help_text=help_texts['title'])
    make = models.CharField(max_length=100, null=True, blank=True, help_text=help_texts['make'])
    model = models.CharField(max_length=100, null=True, blank=True, help_text=help_texts['model'])
    year = models.PositiveIntegerField(validators=[MinValueValidator(1900), MaxValueValidator(2100)], null=True, blank=True, help_text=help_texts['year'])
    description = models.TextField(help_text=help_texts['description'])
    country = models.CharField(max_length=100, blank=True, null=True, help_text="Country code (e.g., JP)")
    
    # Car Image
    # image = models.ImageField(upload_to='cars/', null=True, blank=True, help_text='Upload a clear image of the car. Recommended size: 800x600 pixels.')
    
    # Technical Specifications
    milage = models.PositiveIntegerField(verbose_name='Mileage in Km',help_text=help_texts['milage'])
    fuel_type = models.CharField(max_length=20, choices=FUEL_TYPE, default='petrol', help_text=help_texts['fuel_type'])
    transmission = models.CharField(max_length=20, choices=TRANSMISSION_CHOICES, default='automatic', help_text=help_texts['transmission'])
    engine_size = models.DecimalField(max_digits=4, decimal_places=1, verbose_name='Engine Size (L)', null=True, blank=True, help_text=help_texts['engine_size'])
    power = models.PositiveIntegerField(verbose_name='Power (HP)', null=True, blank=True, help_text=help_texts['power'])
    doors = models.PositiveSmallIntegerField(default=4, help_text='Number of doors (2, 3, 4, or 5)')
    seats = models.PositiveSmallIntegerField(default=5, help_text='Number of seats (2, 4, or 5)')
    drive_type = models.CharField(max_length=20, choices=DRIVE_TYPE_CHOICES, null=True, blank=True, help_text='Type of drive (FWD, RWD, AWD, or 4WD)')
    steering = models.CharField(max_length=10, choices=STEERING_CHOICES, default='right', help_text='Steering position (Right-Hand Drive or Left-Hand Drive)')
    
    # Condition & History
    condition = models.CharField(max_length=20, choices=CONDITION_CHOICES, null=True, blank=True,help_text=help_texts['condition'])
    color = models.CharField(max_length=50, null=True, blank=True, help_text='Color of the car (e.g., Red, Blue, Black)')
    is_imported = models.BooleanField(default=True, help_text='Check if the car is imported')
    has_warranty = models.BooleanField(default=False, help_text='Check if the car comes with a warranty')
    number_of_owners = models.PositiveSmallIntegerField(default=1, help_text='Number of previous owners of the car')
    
    # Pricing & Listing Details
    price = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True, help_text=help_texts['price'])
    is_negotiable = models.BooleanField(default=True, help_text='Check if the price is negotiable')
    is_featured = models.BooleanField(default=False, help_text=help_texts['is_featured'])
    date_added = models.DateTimeField(default=timezone.now, help_text='Date and time when the car was listed')
    is_sold = models.BooleanField(default=False, help_text=help_texts['is_sold'])
    
    
    
    def __str__(self):
        if self.make and self.model and self.year:
            return f"{self.year} {self.make} {self.model}"
        return self.title
    
    @property
    def first_image(self):
        """Get the first image for this car"""
        return self.images.first()
    
    class Meta:
        ordering = ['-date_added']
        
        
class CarImage(models.Model):
    car = models.ForeignKey(Car, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='cars/', help_text='Upload car images')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['uploaded_at']
        verbose_name = 'Car Image'
        verbose_name_plural = 'Car Images'
    
    def __str__(self):
        return f"Image for {self.car}"
    
    
    
class CountryStock(models.Model):
    name = models.CharField(max_length=100, help_text="Country name")
    code = models.CharField(max_length=10, help_text="Country code (e.g., JP)")
    flag_image = models.CharField(max_length=100, default="", help_text="Flag image code")
    active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = 'Country Stock'
        verbose_name_plural = 'Country Stocks'
        
    def __str__(self):
        return self.name
    