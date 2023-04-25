
from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields=[
            "id",
            "task",
            "created_date",
            "status",
            "user"
        ]
        extra_kwargs={
            "task":{"required":True},
            "user":{"read_only":True}
        }

class TodoListSerializer(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields=[
            "id",
            "task",
            "status",
            "created_date",
        ]
        extra_kwargs={
            "task":{"read_only":True}
        }