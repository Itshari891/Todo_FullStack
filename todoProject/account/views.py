from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
User=get_user_model()
# Create your views here.




class RegisterAPIView(APIView):

    def post(self,request,*args,**kwargs):
        serializer=UserSerializer(data=request.data)
        res={}
        if serializer.is_valid():
            account=serializer.save()
            res["username"]=account.username
            res["email"]=account.email
            token,create=Token.objects.get_or_create(user=account)
            res["token"]=token.key
            return Response(res)
        return Response(serializer.errors,status=status.HTTP_406_NOT_ACCEPTABLE)



