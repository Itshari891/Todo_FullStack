
from django.db import models
from django.contrib.auth import get_user_model
User=get_user_model()
# Create your models here.

class Todo(models.Model):
    task=models.CharField(max_length=50)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    created_date=models.DateTimeField(auto_now_add=True)
    status=models.BooleanField(default=False)
    

    def __str__(self) -> str:
        return self.task
