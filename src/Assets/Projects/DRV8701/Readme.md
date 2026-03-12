# DRV8701 Full Bridge Motor Driver

A high-power brushed DC motor driver based on Texas Instruments DRV8701E, implemented as a full H-Bridge using four external 50N06 N-channel MOSFETs, supporting high voltage operation and precise current control for industrial and automotive motor applications.

## Features
### Full Bridge Topology
- Gate driver DRV8701E controlling 4 external MOSFETs (Q1–Q4) for high-current capability.
- Wide VIN input.

### Power Regulation
- Onboard 3.3V LDO regulator using MST5433BTG to supply logic circuitry.
- Additional internal driver supplies (+4V8, +3V3_DR).

### Control Interface
- PWM and DIR control via 3-pin header (GND, PWM, DIR).
- EN and nSLEEP handled internally by driver logic.
- VREF pin allows adjustable current regulation.

### Current Sensing & Feedback
- SNSOUT provides analog current feedback.
- nFAULT pin available with test point for diagnostics.
- Programmable current limit supported.

### Protection
- Overcurrent protection (OCP).
- Undervoltage lockout (UVLO).
- Thermal shutdown.
- Fault indication through nFAULT and LED indicators.

### Outputs
- Motor terminals exposed through 2-pin terminal block (PHA, PHB).
- High-side and low-side gate control (GHx, GLx, SHx pins).

### Indicators & Test Points
- Multiple LEDs for power, status, and fault indication.
- Extensive test points (TP1–TP16) for debugging and signal monitoring.

## Applications
- Brushed DC Motor Control
- High-current Industrial Drives
- Automotive Actuators
- Robotics and Motion Systems
- Battery-powered Motor Systems

This board provides a robust and scalable full-bridge motor control solution using the DRV8701E gate driver with external MOSFETs, enabling high current capability, configurable current limiting, and advanced protection features suitable for demanding motor drive applications.
