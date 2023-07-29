### Lorenz Attractor

**by camilo davila**

![lorenz attractor](https://scipython.com/static/media/blog/lorenz/lorenz2.png)

---

# the lorenz attractor

the lorenz atrractor is a system of differential equations that has chaotic solutions for certain parameter values.

## lorenz equations

this suppose to be only text, with some maths $x^2 + y^2 = z^2$.

$$
\frac{dx}{dt} = \sigma(y - x)
$$

---

# another slide

this is a table with some data about radioactivity.

| isotope | half-life |
| ------- | --------- |
| U-238   | 4.468e9   |
| U-235   | 7.038e8   |
| Th-232  | 1.405e10  |
| K-40    | 1.277e9   |

---

# a quote from robert oppenheimer

> Now I am become Death, the destroyer of worlds.

---

# end slide with code

```python
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

def lorenz(x, y, z, s=10, r=28, b=2.667):
    x_dot = s*(y - x)
    y_dot = r*x - y - x*z
    z_dot = x*y - b*z
    return x_dot, y_dot, z_dot
```
