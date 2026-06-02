def generate_notes(text):

    sentences = text.split(".")

    notes = []

    for sentence in sentences[:5]:

        cleaned = sentence.strip()

        if cleaned:
            notes.append(cleaned)

    return notes