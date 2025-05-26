#### Please use the [reference](https://github.com/virtual-labs/ph3-exp-dev-process/blob/main/pedagogy/README.org) document to fill this template.  Follow the [link](https://github.com/virtual-labs/ph3-exp-dev-process/tree/main/sample/pedagogy) to view a sample pedagogy document.

## Pedagogy
<p align="center">


<br>
<b> Experiment : Design a front end BPSK modulator and demodulator <a name="top"></a> <br>
</p>

<b>Discipline | Electronics & Communication Engineering <b> 
:--|:--|
<b> Lab | Communication Engineering Lab<b> 
<b> Experiment|  Design a front end BPSK modulator and demodulator  <b> 


<h4> [1. Focus Area](#LO)
<h4> [2. Learning Objectives ](#LO)
<h4> [3. Instructional Strategy](#IS)
<h4> [4. Task & Assessment Questions](#AQ)
<h4> [5. Simulator Interactions](#SI)
<hr>

<a name="LO"></a>
#### 1. Focus Area : Digital communation,RF Signal Processing ,modulation Techniques ,wireless communication systems
#### 2. Learning Objectives and Cognitive Level


Sr. No |	Learning Objective	| Cognitive Level | Action Verb
:--|:--|:--|:-:
1.|Understand the concept of BPSK modulation and demodulation in real world RF system|Understand|Understand   
2.|Understand the concept of BPSK modulation and demodulation in real world RF system|Analyze|Simulate,Analyze   
3.|Identify effect of noise and filte inring front-end BPSK receivers| Evaluate|Identity,Evaluate   
<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="IS"></a>
#### 3. Instructional Strategy
##### Simulation-based Intractive Learning  :    <u>   
##### Assessment Method:
###### Quiz after simulation<br>
###### Observation of waveform behavior<br>
###### Viva or MCQs based on BPSK modulation/demodulation<br>
###### Lab report submission with calculation and theory<br>  

<u> <b>Description: </b>
###### In this experiment, students will use a simulation-based environment to understand the working of Binary Phase Shift Keying (BPSK). The strategy involves step-by-step virtual simulation ofBPSK signal generation using binary input dataPhase shift verification (0° for bit ‘1’, 180° for bit ‘0’)Effect of noise and filtering in demodulated outputComparison of transmitted and received signal   </u>
<br>
    

<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="AQ"></a>
#### 4. Task & Assessment Questions:

  
<br>

Sr. No |	Learning Objective	| Task to be performed by <br> the student  in the simulator | Assessment Questions as per LO & Task
:--|:--|:--|:-:
1.|   To understand phase shift in bpsk four binary inputs  |simulate BPSK signal generation for binary data (0 and 1)| what is the phase of the BPOSK signal for bit 0 and bit 1  
2.|to analyze the effect of noise and filtering at the receiver end   |add gaussian noise to bpsk signal and observe the demodulated output before and after applying a filter     |how does filtering affect the output signal in the presence of noise ? what is the role of a low pass filter here 


<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="SI"></a>

#### 4. Simulator Interactions:
<br>

Sr.No | What Students will do? |	What Simulator will do?	| Purpose of the task
:--|:--|:--|:--:
1.|student will input binary data sequence (e.g., 1010) |simulator with generate bpsk mudulated based on input|to observe how binary data is cnverted into phase-shifted carrier signals 
2.|student will add noise and apply filter to received signal  |simulator will show noisy and filtered demodulated signal  |to understand affect of noise and importance of filtering at receiver end
