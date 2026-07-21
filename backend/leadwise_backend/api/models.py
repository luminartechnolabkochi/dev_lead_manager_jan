from django.db import models


class Lead(models.Model):

    STATUS_CHOICES = [
        ("New", "New"),
        ("Contacted", "Contacted"),
        ("Interested", "Interested"),
        ("Not Interested", "Not Interested"),
        ("Joined", "Joined"),
    ]

    SOURCE_CHOICES = [
        ("Instagram", "Instagram"),
        ("Facebook", "Facebook"),
        ("Website", "Website"),
        ("WhatsApp", "WhatsApp"),
        ("Walk-in", "Walk-in"),
        ("Referral", "Referral"),
        ("Call", "Call"),
    ]

    COURSE_CHOICES = [
        ("Django","Django"),
        ("MEARN-STACK","MEARN_STACK"),
        ("JAVA","JAVA"),
        ("SOFTWARE-TESTING","SOFTWARE_TESTING"),
        ("ASP.net","ASP.net"),
        ("DATASCEIENCE","DATASCIENCE"),
        ("DIGITAL-MARKETING","DIGITAL-MARKETING"),
        ("FLUTTER","FLUTTER")
    ]

    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)

    course = models.CharField(max_length=150,choices=COURSE_CHOICES)

    source = models.CharField(
        max_length=20,
        choices=SOURCE_CHOICES,
        default="Website"
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="New"
    )

    remarks = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name