# Generated by Django 2.0.3 on 2018-03-15 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lab02_todo', '0005_auto_20180315_0956'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todoitem',
            name='complete_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
