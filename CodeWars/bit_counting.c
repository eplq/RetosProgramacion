#include <stddef.h>

size_t countBits(unsigned value)
{
  long int numberOfBits = 0;

  while (value > 0) {
    numberOfBits += value & 1;
    value = value >> 1;
  }

	return numberOfBits;
}
