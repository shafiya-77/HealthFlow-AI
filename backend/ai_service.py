def analyze_query(text):

    text = text.lower()


    if "appointment" in text or "doctor" in text:
        category = "Doctor Consultation"

    elif "report" in text or "test" in text:
        category = "Medical Report"

    else:
        category = "General Query"



    if (
        "pain" in text
        or "emergency" in text
        or "urgent" in text
    ):
        priority = "High"

    elif "fever" in text:
        priority = "Medium"

    else:
        priority = "Low"



    if "heart" in text or "chest" in text:
        department = "Cardiology"

    elif "skin" in text:
        department = "Dermatology"

    else:
        department = "General Medicine"



    return {

        "category": category,
        "priority": priority,
        "department": department

    }