#DRV8243H Motor Driver Board
Automotive-grade 40V, 12A H-Bridge motor driver based on Texas Instruments DRV8243HQRXYRQ1, with integrated current sensing, protection features, and configurable control modes.

## Features
### H-Bridge Motor Driver
- Based on DRV8243HQRXYRQ1(40V max supply).
- Supports up to 12A peak motor current.
- Integrated current sensing and IPROPI output for monitoring.
- Built-in protections: overcurrent, overtemperature, undervoltage, and fault reporting (nFAULT pin).

### Power Supply
- Input supply via 2-pin terminal block (VM, GND).
-Onboard 5V regulator using AP7381-50Y-13 (150mA LDO).

### Control Interface
- Control signals available via 3-pin header:
    - EN/IN1– Enable / Input 1
    - H/IN2– Phase / Input 2
    - MODE – Selects control mode
- Operating Modes
    - PH/EN Mode (MODE = GND)
    - Independent Half-Bridge Mode
    - PWM Mode (MODE left open)

### Current Regulation (ITRIP)
- Adjustable current limit using IPROPI.
- Multiple jumper options (JP1–JP6) for flexible current configuration.

### Motor Output
- 2-pin terminal block for motor connection (OUT1, OUT2).
- Integrated flyback handling through internal MOSFET body diodes.
- External bridge rectifier MB26F included for additional robustness.

### Indicators
- Multiple 0805 LEDs:
    - Red LEDs (Status/Power indication)
    - Green LEDs (Control signals)
    - Blue LED (Fault indication via nFAULT)

### Protection
- Full protection features integrated in DRV8243H:
Overcurrent protection
Thermal shutdown
Undervoltage lockout
Fault reporting (nFAULT test point available)

### Connectors
- J1– Motor Output (OUT1, OUT2)
- J2– Power Input (VM, GND)
- P1– Control Header (GND, EN/IN1, PH/IN2)
- JP1–JP7 – Configuration Jumpers
- TP1– Fault Test Point

## Applications
- DC Motor Control
- Automotive Actuators
- Robotics
- Industrial Motion Control
- High-current brushed motor systems


This board provides a compact and configurable high-current H-Bridge solution using the DRV8243H automotive-grade driver. With adjustable current limiting, multiple control modes, onboard 5V regulation, and fault monitoring, it is suitable for robust motor control applications in automotive and industrial environments.
