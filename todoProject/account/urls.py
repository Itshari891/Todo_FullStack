from django.urls import path
from .views import RegisterAPIView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns=[
    path('register',RegisterAPIView.as_view(),name='signup'),
    path('login',obtain_auth_token,name='signin'),
]