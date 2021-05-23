from django.urls import path
from . import views

urlpatterns = [
    path('getuser',views.getalluser,name='registration' ),
    path('login', views.LoginUser, name='registration'),
    path('register', views.RegisterUser, name='registration'),
    path('allblog',views.Getall,name='allblog'),
    path('userblog',views.Userblog,name='allblog'),
    path('createblog', views.Createblog, name='allblog'),
    path('blog/<int:id>', views.Blogsid, name='allblog')

]