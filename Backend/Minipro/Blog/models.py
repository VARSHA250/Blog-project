from django.db import models
from django.contrib.auth.models import User
class Blog(models.Model):
    title=models.CharField(max_length=2000)
    content=models.TextField()
    created_at=models.DateTimeField(auto_now=False,auto_now_add=True,blank=True)
    updated_at=models.DateTimeField(auto_now=True,null=True)
    count = models.IntegerField(default=0)
    users=models.ForeignKey(User,on_delete=models.CASCADE)

    class Meta:
        db_table="Blog"