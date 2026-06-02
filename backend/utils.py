def generate_summary(text):

    sentences = text.split(".")

    summary = ".".join(sentences[:3])

    return summary


def generate_notes(text):

    sentences = text.split(".")

    notes = []

    for sentence in sentences[:5]:

        cleaned = sentence.strip()

        if cleaned:
            notes.append(cleaned)

    return notes


def generate_quiz(text):

    return [
        "What is the main topic of the video?",
        "What important concept was explained?",
        "What did you learn from this video?"
    ]