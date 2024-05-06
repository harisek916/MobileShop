from django.db import models

# Create your models here.


class Mobiles(models.Model):
    title=models.CharField(max_length=200)
    price=models.PositiveIntegerField()
    brand=models.CharField(max_length=200)
    specs=models.CharField(max_length=200)
    picture=models.ImageField(upload_to="images",default="images/default.jpg",null=True,blank=True)

    def __str__(self):
        return self.title
