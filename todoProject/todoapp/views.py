from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import TodoSerializer,TodoListSerializer
from rest_framework.authentication import TokenAuthentication

# Create your views here.


class TodoView(ListCreateAPIView):
    serializer_class=TodoSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    def get_queryset(self):
        user=self.request.user
        return user.todo_set.all()

class TododetailView(RetrieveUpdateDestroyAPIView):
    serializer_class=TodoListSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]
 
    def get_queryset(self):
        user=self.request.user
        return user.todo_set.all()
