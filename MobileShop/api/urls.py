from django.urls import path
from api import views





urlpatterns=[
    path("v1/mobiles/",views.MobileListCreateView.as_view()),
    path("v1/mobiles/<int:pk>/",views.MobileRetrieveUpdateDestroyView.as_view()),
]