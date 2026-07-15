from django.contrib import admin
from .models import Category, Product, userProfile, order, orderItem

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(userProfile)
admin.site.register(order)
admin.site.register(orderItem)

# Register your models here.
