from django.shortcuts import render
from rest_framework import generics
from .serializers import CarSerializer
from cars.models import Car
# Create your views here.


class Cars(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        return context


class CarDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        return context

