def generate_summary(text):

    sentences = text.split(".")

    summary = ".".join(sentences[:3])

    return summary