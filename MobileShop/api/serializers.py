from rest_framework import serializers

from api.models import Mobiles


class MobileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Mobiles
        fields="__all__"
        read_only_fields=["id"]







