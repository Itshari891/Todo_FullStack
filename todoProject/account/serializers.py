
from django.contrib.auth import get_user_model
User=get_user_model()
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from rest_framework.response import Response


class UserSerializer(ModelSerializer):
    password2=serializers.CharField(required=True,write_only=True)
    class Meta:
        model=User
        fields=[
            "username",
            "email",
            "password",
            "password2",
        ]
        
    def save(self, **kwargs):
        account=User(
            username=self.validated_data["username"],
            email=self.validated_data["email"]
        )
        password=self.validated_data["password"]
        password2=self.validated_data["password2"]
        if password != password2:
            raise serializers.ValidationError({"password":"not matching"})
        account.set_password(password)
        account.save()
        return account