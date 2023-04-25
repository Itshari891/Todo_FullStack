from django.urls import path
from .views import TodoView,TododetailView


urlpatterns=[
    path('todo',TodoView.as_view(),name='todo'),
    path('todo/<int:pk>',TododetailView.as_view(),name='detail'),
]