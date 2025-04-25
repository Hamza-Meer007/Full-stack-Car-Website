from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone

# Create your models here.


class Car(models.Model):
    
    FUEL_TYPE = [
        ('petrol', 'Petrol'),
        ('diesel', 'Diesel'),
        ('electric', 'Electric'),
        ('hybrid', 'Hybrid'),
        ('lpg', 'LPG'),
    ]
    
    TRANSMISSION_CHOICES = [
        ('automatic', 'Automatic'),
        ('manual', 'Manual'),
        ('cvt', 'CVT'),
        ('semi_auto', 'Semi-Automatic'),
    ]
    
    DRIVE_TYPE_CHOICES = [
        ('fwd', 'Front-Wheel Drive'),
        ('rwd', 'Rear-Wheel Drive'),
        ('awd', 'All-Wheel Drive'),
        ('4wd', '4-Wheel Drive'),
    ]
    
    CONDITION_CHOICES = [
        ('excellent', 'Excellent'),
        ('very_good', 'Very Good'),
        ('good', 'Good'),
        ('fair', 'Fair'),
        ('poor', 'Poor'),
    ]

    STEERING_CHOICES = [
        ('right', 'Right-Hand Drive'),
        ('left', 'Left-Hand Drive'),
    ]
    
    # Basic Information
    title = models.CharField(max_length=200)
    make = models.CharField(max_length=100, null=True, blank=True)
    model = models.CharField(max_length=100, null=True, blank=True)
    year = models.PositiveIntegerField(validators=[MinValueValidator(1900), MaxValueValidator(2100)], null=True, blank=True)
    description = models.TextField()
    
    # Car Image
    image = models.ImageField(upload_to='cars/', null=True, blank=True)
    
    # Technical Specifications
    milage = models.PositiveIntegerField(verbose_name='Mileage in Km')
    fuel_type = models.CharField(max_length=20, choices=FUEL_TYPE)
    transmission = models.CharField(max_length=20, choices=TRANSMISSION_CHOICES)
    engine_size = models.DecimalField(max_digits=4, decimal_places=1, verbose_name='Engine Size (L)', null=True, blank=True)
    power = models.PositiveIntegerField(verbose_name='Power (HP)', null=True, blank=True)
    doors = models.PositiveSmallIntegerField(default=4)
    seats = models.PositiveSmallIntegerField(default=5)
    drive_type = models.CharField(max_length=20, choices=DRIVE_TYPE_CHOICES, null=True, blank=True)
    steering = models.CharField(max_length=10, choices=STEERING_CHOICES, default='right')
    
    # Condition & History
    condition = models.CharField(max_length=20, choices=CONDITION_CHOICES, null=True, blank=True)
    color = models.CharField(max_length=50, null=True, blank=True)
    is_imported = models.BooleanField(default=True)
    has_warranty = models.BooleanField(default=False)
    number_of_owners = models.PositiveSmallIntegerField(default=1)
    
    # Pricing & Listing Details
    price = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    is_negotiable = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    date_added = models.DateTimeField(default=timezone.now)
    is_sold = models.BooleanField(default=False)
    
    # Location
    location = models.CharField(max_length=200, null=True, blank=True)
    
    def __str__(self):
        if self.make and self.model and self.year:
            return f"{self.year} {self.make} {self.model}"
        return self.title
    
    class Meta:
        ordering = ['-date_added']
  