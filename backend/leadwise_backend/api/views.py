from django.shortcuts import render

from api.serializers import LeadSerializer

from api.models import Lead
from rest_framework.generics import CreateAPIView,ListAPIView,RetrieveAPIView,UpdateAPIView,DestroyAPIView


class LeadListCreateView(CreateAPIView,ListAPIView):

    serializer_class = LeadSerializer

    queryset = Lead.objects.all()


class LeadRetrieveUpdateDeleteView(RetrieveAPIView,UpdateAPIView,DestroyAPIView):

    serializer_class = LeadSerializer

    queryset = Lead.objects.all()