def format_duration(nseconds):

    if nseconds < 0:
        return None

    if not nseconds:
        return "now"

    values = {
        "years": int((nseconds / 31536000)),
        "days": int((nseconds / 86400) % 365),
        "hours": int((nseconds / 3600) % 24),
        "minutes": int((nseconds / 60) % 60),
        "seconds": int(nseconds % 60),
    }

    human_texts = {
        "years": ["year", "years"],
        "days": ["day", "days"],
        "hours": ["hour", "hours"],
        "minutes": ["minute", "minutes"],
        "seconds": ["second", "seconds"],
    }

    existent_values = []
    for key, value in values.items():
        if not value:
            continue

        human_text_string = "{} {}".format(value, human_texts[key][value != 1])
        existent_values.append(human_text_string)

    if len(existent_values) >= 3:
        return f"{', '.join(existent_values[:-2])}, {existent_values[-2]} and {existent_values[-1]}"

    if len(existent_values) == 2:
        return f"{existent_values[-2]} and {existent_values[-1]}"

    return existent_values[0]
