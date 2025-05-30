Theory:

🔸 1. Introduction:

Binary Phase Shift Keying (BPSK) is one of the most basic forms of digital modulation. In BPSK, each bit in the binary data is represented by a change in the phase of a carrier wave. It uses two distinct phase states separated by 180 degrees.

Binary '1' → Carrier with phase 0°

Binary '0' → Carrier with phase 180°

This makes it a 2-phase modulation scheme, which is also called Phase Reversal Keying.

🔸 2. Mathematical Representation:

The modulated BPSK signal can be written as:

s(t) =√2P.cos(2πfct+θ)

Where:

s(t) = BPSK modulated signal

P = Signal power

fc = Carrier frequency

θ = Phase shift (0 for binary '1', π for binary '0')


Or, using baseband representation:

s(t) = m(t).cos(2πfct)


🔸 3. BPSK Modulation Process:

A binary data stream is first converted to NRZ (Non-Return to Zero) format:

Bit '1' → +1

Bit '0' → -1

This NRZ signal is multiplied with a high-frequency carrier signal (cosine wave).

The result is a BPSK modulated signal where the phase of the carrier flips 180° depending on the data bit.


🔸 4. BPSK Demodulation:

At the receiver:

1. The received signal is multiplied by a reference carrier signal (same frequency and phase as the transmitter).

2. The output is passed through a low pass filter to extract the baseband signal.

3. A decision device is used:

If output > 0 → bit '1'

If output < 0 → bit '0'

This is known as coherent detection because it relies on phase synchronization with the carrier.



🔸 5. Advantages of BPSK:

Simple to implement

Highly resistant to noise

Efficient in low SNR (Signal-to-Noise Ratio) environments

Best BER (Bit Error Rate) performance among all binary modulation schemes


🔸 6. Disadvantages:

Carries only 1 bit per symbol → Low data rate

Requires coherent detection (phase synchronization at receiver)

Inefficient for bandwidth-sensitive applications


🔸 7. Applications of BPSK:

Satellite communication

Deep space communication (NASA uses BPSK in some missions)

RFID systems

Wireless LAN (some implementations)

Bluetooth low-energy control signals

🔸 8. Performance:

BPSK has the lowest probability of error for a given energy per bit in comparison with other binary schemes.

Bit Error Rate (BER) for BPSK in AWGN channel:

BER = Q(√Eb/N0)
Where:

 Eb= Energy per bit

N0 = Noise power spectral density

Q = Q-function
