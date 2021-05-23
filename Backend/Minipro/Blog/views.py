from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view,authentication_classes,permission_classes
from django.contrib.auth.models import User
from rest_framework.response import Response
from .serializers import UserSerializer,BlogSerializer
from rest_framework.authentication import TokenAuthentication
from .models import Blog
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework_simplejwt.tokens import RefreshToken



@api_view(["GET"])
def getalluser(request):
    user=User.objects.all()
    serialize=UserSerializer(user,many=True)
    return Response(data=serialize.data,status=200)

@api_view(["POST"])
def LoginUser(request):
    try:
        data=request.data
        password=data["password"]
        username=data["username"]
        email=data["email"]
        user=User.objects.get(username=username,email=email)
        if user.check_password(password):
            token=RefreshToken.for_user(user)


            serilaze=UserSerializer(user).data
            serilaze["token"]=str(token.access_token)
            return Response(data=serilaze,status=200)
        else:
            message={'message':"User with this password is incorrect"}
            return Response(message,status=401)
    except:
        message={'message':"User with this username or email is incorrect"}
        return Response(message,status=401)


@api_view(["POST"])
def RegisterUser(request):
    data=request.data
    password=data["password"]
    serialize=UserSerializer(data={**data,"password":make_password(password)})
    if serialize.is_valid():
        serialize.save()
    else:
        return Response(data=serialize.errors,status=400)

    user=User.objects.last()
    token=RefreshToken.for_user(user)
    serialize2=UserSerializer(user).data
    serialize2["token"]=str(token.access_token)
    return Response(data=serialize2,status=201)



@api_view(["GET"])
def Getall(request):
    blog=Blog.objects.all()
    serialize=BlogSerializer(blog,many=True)
    return Response(data=serialize.data,status=200)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def Userblog(request):
    blog=Blog.objects.filter(users=request.user.id)
    serialize=BlogSerializer(blog,many=True)
    return Response(serialize.data,status=200)


@api_view(["POST"])
def Createblog(request):
    data=request.data
    serialize=BlogSerializer(data=data)
    if serialize.is_valid():
        serialize.save()
    else:
        return Response(data=serialize.errors,status=400)
    return Response(serialize.data,status=201)

@api_view(["GET","PUT","DELETE"])
@permission_classes([IsAuthenticated])
def Blogsid(request,id):
    if request.method == "GET":
        blog=Blog.objects.get(users=request.user.id,id=id)
        serialize=BlogSerializer(blog)
        return Response(serialize.data,status=200)
    elif request.method == "PUT":
        blog1=Blog.objects.get(users=request.user.id,id=id)
        serialize1=BlogSerializer(data=request.data,instance=blog1)
        if serialize1.is_valid():
            serialize1.save()
        else:
            return Response(serialize1.errors,status=400)
        return Response(serialize1.data,status=200)
    elif request.method == "DELETE":
        blog2 = Blog.objects.get(users=request.user.id,id=id)
        blog2.delete()
        return Response(data=None,status=204)
