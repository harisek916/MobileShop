from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from api.serializers import MobileSerializer
from api.models import Mobiles

# Create your views here.


class MobileListCreateView(APIView):

    def get(self,request,*args,**kwargs):
        qs=Mobiles.objects.all()
        serializer=MobileSerializer(qs,many=True)
        return Response(data=serializer.data)
    
    def post(self,request,*args,**kwargs):
        serializer=MobileSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(data=serializer.errors)
        
class MobileRetrieveUpdateDestroyView(APIView):
    
    def get(self,request,*args,**kwargs):
        id=kwargs.get("pk")
        qs=Mobiles.objects.get(id=id)
        serializer=MobileSerializer(qs)
        return Response(data=serializer.data)
    
    def put(self,request,*args,**kwargs):
        id=kwargs.get("pk")
        mobile_object=Mobiles.objects.get(id=id)
        serializer=MobileSerializer(data=request.data,instance=mobile_object)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(data=serializer.errors)
    
    def delete(self,request,*args,**kwargs):
        id=kwargs.get("pk")
        Mobiles.objects.get(id=id).delete()
        return Response(data={"message":"deleted"})
