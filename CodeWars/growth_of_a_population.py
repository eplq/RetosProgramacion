def nb_year(p0, percent, aug, p):

    years = 0
    population = p0

    while p > population:
        population += int((percent / 100) * population + aug)
        years += 1

    return years
