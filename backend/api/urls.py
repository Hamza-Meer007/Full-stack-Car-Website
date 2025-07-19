
from django.urls import path
from .views import Cars,CarDetails,country_stock_list,car_makes_list, fuel_types_list, transmissions_list
urlpatterns = [
    path('cars/',Cars.as_view()),
    path('cars/<int:pk>/',CarDetails.as_view()),
    path('country-stocks/', country_stock_list, name='country-stocks'),
    path('car-makes/', car_makes_list, name='car-makes-list'),
    path('fuel-types/', fuel_types_list, name='fuel-types-list'),
    path('transmissions/', transmissions_list, name='transmissions-list'),

]

