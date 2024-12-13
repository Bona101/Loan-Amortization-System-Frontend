from django.contrib import admin
from .models import profile, Transactions

# Registering the profile model
@admin.register(profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'username', 'role', 'balance', 'loan_amount', 'loan_term')
    search_fields = ('name', 'username')

# Registering the Transactions model
@admin.register(Transactions)
class TransactionsAdmin(admin.ModelAdmin):
    list_display = ('profile', 'amount', 'state', 'next_payment', 'interest_on_loan', 'date')
    list_filter = ('state', 'date')
    search_fields = ('profile__name', 'amount')
