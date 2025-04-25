
from django.urls import path
from .views import Cars,CarDetails
urlpatterns = [
    path('cars/',Cars.as_view()),
    path('cars/<int:pk>/',CarDetails.as_view())
]
