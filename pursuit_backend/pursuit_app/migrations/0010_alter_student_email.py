# Generated by Django 4.1.1 on 2022-11-01 00:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pursuit_app', '0009_alter_round_season_alter_student_mobile_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='email',
            field=models.EmailField(max_length=254, null=True),
        ),
    ]