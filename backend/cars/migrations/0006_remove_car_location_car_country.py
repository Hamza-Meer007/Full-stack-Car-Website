# Generated by Django 5.2.3 on 2025-07-08 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0005_countrystock'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='car',
            name='location',
        ),
        migrations.AddField(
            model_name='car',
            name='country',
            field=models.CharField(blank=True, help_text='Country code (e.g., JP)', max_length=100, null=True),
        ),
    ]
