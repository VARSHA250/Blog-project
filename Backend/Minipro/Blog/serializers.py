from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from .models import Blog

class UserSerializer(serializers.ModelSerializer):
    first_name=serializers.CharField(max_length=20,allow_null=True)
    email=serializers.EmailField(required=True,validators=[UniqueValidator(queryset=User.objects.all(),message="Email is already in use")])
    username=serializers.CharField(required=True,validators=[UniqueValidator(queryset=User.objects.all(),message="Username is already in use")])
    password=serializers.CharField(min_length=6,write_only=True)
    is_staff=serializers.BooleanField(default=True)

    class Meta:
        model=User
        fields=["id","first_name","email","username","password","is_staff"]

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model= Blog
        fields=["id","title","content","created_at","updated_at","users"]