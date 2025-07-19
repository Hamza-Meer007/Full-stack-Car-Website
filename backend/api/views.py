from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from .serializers import CarSerializer, CountryStockSerializer
from cars.models import Car, CountryStock

class Cars(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    
    def get_queryset(self):
        queryset = Car.objects.all()
        
        # Get filters from query params
        country = self.request.query_params.get('country', None)
        make = self.request.query_params.get('make', None)
        model = self.request.query_params.get('model', None)
        is_featured = self.request.query_params.get('is_featured', None)
        
        # Apply filters
        if country:
            queryset = queryset.filter(country__iexact=country)
        if make and make != 'all':
            queryset = queryset.filter(make__icontains=make)
        if model and model != 'all':
            queryset = queryset.filter(model__icontains=model)
        if is_featured:
            queryset = queryset.filter(is_featured=True)
            
        return queryset

class CarDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

@api_view(['GET'])
def country_stock_list(request):
    """Return a list of countries from both CountryStock and Car models"""
    try:
        # Get countries from CountryStock model
        countries_from_stock = CountryStock.objects.filter(active=True)
        stock_serializer = CountryStockSerializer(countries_from_stock, many=True)
        
        # If CountryStock is empty, fallback to countries from Car model
        if not stock_serializer.data:
            # Get unique countries from Car model
            car_countries = Car.objects.values_list('country', flat=True).distinct().order_by('country')
            car_countries_list = [country for country in car_countries if country]
            
            # Create a list of country objects similar to CountryStock format
            fallback_countries = []
            country_name_map = {
                'jp': 'Japan',
                'mm': 'Myanmar', 
                'gb': 'United Kingdom',
                'jm': 'Jamaica',
                'tt': 'Trinidad and Tobago',
                'au': 'Australia',
                'mu': 'Mauritius',
                'gy': 'Guyana',
                'tz': 'Tanzania',
                'ie': 'Ireland',
                'ke': 'Kenya',
                'zm': 'Zambia',
                'nz': 'New Zealand'
            }
            
            for country_code in car_countries_list:
                fallback_countries.append({
                    'code': country_code,
                    'name': country_name_map.get(country_code, country_code.upper()),
                    'count': Car.objects.filter(country=country_code).count()
                })
            
            return Response(fallback_countries)
        
        return Response(stock_serializer.data)
        
    except Exception as e:
        # If both fail, return hardcoded list
        fallback_countries = [
            {'code': 'jp', 'name': 'Japan', 'count': 0},
            {'code': 'mm', 'name': 'Myanmar', 'count': 0},
            {'code': 'gb', 'name': 'United Kingdom', 'count': 0},
            {'code': 'jm', 'name': 'Jamaica', 'count': 0},
            {'code': 'tt', 'name': 'Trinidad and Tobago', 'count': 0},
            {'code': 'au', 'name': 'Australia', 'count': 0},
            {'code': 'mu', 'name': 'Mauritius', 'count': 0},
            {'code': 'gy', 'name': 'Guyana', 'count': 0},
            {'code': 'tz', 'name': 'Tanzania', 'count': 0},
            {'code': 'ie', 'name': 'Ireland', 'count': 0},
            {'code': 'ke', 'name': 'Kenya', 'count': 0},
            {'code': 'zm', 'name': 'Zambia', 'count': 0},
            {'code': 'nz', 'name': 'New Zealand', 'count': 0}
        ]
        return Response(fallback_countries)

@api_view(['GET'])
def car_makes_list(request):
    """Return a list of all unique car makes"""
    try:
        makes = Car.objects.values_list('make', flat=True).distinct().order_by('make')
        makes_list = [make for make in makes if make]
        return Response(makes_list)
    except Exception as e:
        return Response(['Toyota', 'Honda', 'Nissan', 'Mazda', 'Subaru', 'Mitsubishi'])

@api_view(['GET'])
def fuel_types_list(request):
    """Return a list of all unique fuel types"""
    try:
        fuel_types = Car.objects.values_list('fuel_type', flat=True).distinct().order_by('fuel_type')
        fuel_types_list = [fuel_type for fuel_type in fuel_types if fuel_type]
        return Response(fuel_types_list)
    except Exception as e:
        return Response(['Petrol', 'Diesel', 'Hybrid', 'LPG'])

@api_view(['GET'])
def transmissions_list(request):
    """Return a list of all unique transmissions"""
    try:
        transmissions = Car.objects.values_list('transmission', flat=True).distinct().order_by('transmission')
        transmissions_list = [transmission for transmission in transmissions if transmission]
        return Response(transmissions_list)
    except Exception as e:
        return Response(['Automatic', 'Manual', 'CVT', 'Semi-Automatic'])