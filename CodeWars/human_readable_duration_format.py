def format_duration(seconds):

    if seconds < 0:
        return None

    if not seconds:
        return "now"

    years = seconds / 31536000
    days = (years - int(years)) * 365
    hours = (days - int(days)) * 24
    minutes = (hours - int(hours)) * 60
    seconds = (minutes - int(minutes)) * 60

    message = ""
    if seconds:
        message = f"{int(seconds)} {'seconds' if int(seconds) != 1 else 'second'}"

    if minutes >= 1:
        message = f"{int(minutes)} {'minutes' if int(minutes) != 1 else 'minute'} and " + message

    if hours >= 1:
        message = f"{int(hours)} {'hours' if int(hours) != 1 else 'hour'}, " + message

    if days >= 1:
        message = f"{int(days)} {'days' if int(days) != 1 else 'day'}, " + message

    if years >= 1:
        message = f"{years} {'years' if int(years) != 1 else 'year'}, " + message

    return message
