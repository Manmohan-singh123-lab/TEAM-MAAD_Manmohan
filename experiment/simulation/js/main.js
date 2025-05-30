class BPSKSimulator {
    constructor() {
        this.currentStep = 0;
        this.showDemodulation = false;
        this.binaryData = '1010';
        this.carrierFrequency = 1000;
        this.carrierAmplitude = 5;
        
        this.steps = [
            {
                title: 'BPSK Lab Setup',
                description: 'Welcome to BPSK Simulation Lab',
                hindi: 'BPSK सिमुलेशन लैब में आपका स्वागत है। यहाँ हम Binary Phase Shift Keying को समझेंगे।'
            },
            {
                title: 'Binary Data Generation',
                description: 'Generate Binary Data',
                hindi: 'पहले हम बाइनरी डेटा जेनरेट करेंगे। यह हमारा इनपुट सिग्नल है।'
            },
            {
                title: 'Carrier Signal',
                description: 'Generate Carrier Signal',
                hindi: 'अब हम कैरियर सिग्नल बनाएंगे जो हमारे डेटा को मॉड्यूलेट करेगा।'
            },
            {
                title: 'BPSK Modulation',
                description: 'BPSK Modulation Process',
                hindi: 'अब हम BPSK मॉड्यूलेशन देखेंगे। बाइनरी 1 के लिए 0 डिग्री और 0 के लिए 180 डिग्री फेज।'
            },
            {
                title: 'BPSK Demodulation',
                description: 'BPSK Demodulation Process',
                hindi: 'अब हम मॉड्यूलेटेड सिग्नल को डिमॉड्यूलेट करके मूल डेटा पाएंगे।'
            }
        ];
        
        this.initializeElements();
        this.bindEvents();
        this.updateDisplay();
        this.speakHindi(this.steps[0].hindi);
    }
    
    initializeElements() {
        this.stepTitle = document.getElementById('stepTitle');
        this.stepDescription = document.getElementById('stepDescription');
        this.stepDots = document.querySelectorAll('.step-dot');
        this.binaryInput = document.getElementById('binaryInput');
        this.freqSlider = document.getElementById('freqSlider');
        this.ampSlider = document.getElementById('ampSlider');
        this.freqValue = document.getElementById('freqValue');
        this.ampValue = document.getElementById('ampValue');
        this.infoFreq = document.getElementById('infoFreq');
        this.infoAmp = document.getElementById('infoAmp');
        this.nextStepBtn = document.getElementById('nextStepBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.listenBtn = document.getElementById('listenBtn');
        this.startDemodBtn = document.getElementById('startDemodBtn');
        
        // Canvas elements
        this.binaryCanvas = document.getElementById('binaryCanvas');
        this.carrierCanvas = document.getElementById('carrierCanvas');
        this.modulatedCanvas = document.getElementById('modulatedCanvas');
        this.demodulatedCanvas = document.getElementById('demodulatedCanvas');
    }
    
    bindEvents() {
        this.binaryInput.addEventListener('input', (e) => {
            this.binaryData = e.target.value.replace(/[^01]/g, '').slice(0, 8);
            e.target.value = this.binaryData;
            this.updateWaveforms();
        });
        
        this.freqSlider.addEventListener('input', (e) => {
            this.carrierFrequency = parseInt(e.target.value);
            this.updateFrequencyDisplay();
            this.updateWaveforms();
        });
        
        this.ampSlider.addEventListener('input', (e) => {
            this.carrierAmplitude = parseInt(e.target.value);
            this.updateAmplitudeDisplay();
            this.updateWaveforms();
        });
        
        this.nextStepBtn.addEventListener('click', () => this.nextStep());
        this.resetBtn.addEventListener('click', () => this.resetSimulation());
        this.listenBtn.addEventListener('click', () => this.speakHindi(this.steps[this.currentStep].hindi));
        this.startDemodBtn.addEventListener('click', () => this.startDemodulation());
    }
    
    updateDisplay() {
        // Update step info
        this.stepTitle.textContent = this.steps[this.currentStep].title;
        this.stepDescription.textContent = this.steps[this.currentStep].description;
        
        // Update step dots
        this.stepDots.forEach((dot, index) => {
            dot.classList.toggle('active', index <= this.currentStep);
        });
        
        // Update button state
        this.nextStepBtn.disabled = this.currentStep >= this.steps.length - 1;
        
        // Show/hide start demodulation button
        this.startDemodBtn.style.display = this.currentStep >= 3 ? 'block' : 'none';
        
        // Update circuit animations
        this.updateCircuitAnimations();
        
        // Update waveforms
        this.updateWaveforms();
        
        // Update frequency and amplitude displays
        this.updateFrequencyDisplay();
        this.updateAmplitudeDisplay();
    }
    
    updateCircuitAnimations() {
        // Reset all components
        const components = ['dataSource', 'carrierGen', 'bpskMod', 'bandPassFilter', 'output'];
        const lines = ['line1', 'line2', 'line3', 'line4'];
        
        components.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.setAttribute('fill', '#e5e7eb');
        });
        
        lines.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.setAttribute('stroke', '#d1d5db');
        });
        
        // Animate based on current step
        if (this.currentStep >= 1) {
            document.getElementById('dataSource').setAttribute('fill', '#3b82f6');
            document.getElementById('line1').setAttribute('stroke', '#3b82f6');
        }
        
        if (this.currentStep >= 2) {
            document.getElementById('carrierGen').setAttribute('fill', '#ef4444');
            document.getElementById('line2').setAttribute('stroke', '#ef4444');
        }
        
        if (this.currentStep >= 3) {
            document.getElementById('bpskMod').setAttribute('fill', '#10b981');
            document.getElementById('bandPassFilter').setAttribute('fill', '#f59e0b');
            document.getElementById('output').setAttribute('fill', '#8b5cf6');
            document.getElementById('line3').setAttribute('stroke', '#10b981');
            document.getElementById('line4').setAttribute('stroke', '#8b5cf6');
            
            // Show signal flow animation
            document.getElementById('signalFlow').style.display = 'block';
            document.getElementById('modulationStatus').style.display = 'block';
        } else {
            document.getElementById('signalFlow').style.display = 'none';
            document.getElementById('modulationStatus').style.display = 'none';
        }
    }
    
    updateWaveforms() {
        if (this.currentStep >= 1) {
            this.generateBinaryWaveform();
            document.getElementById('binaryWave').style.display = 'block';
        }
        
        if (this.currentStep >= 2) {
            this.generateCarrierWaveform();
            document.getElementById('carrierWave').style.display = 'block';
        }
        
        if (this.currentStep >= 3) {
            this.generateModulatedWaveform();
            document.getElementById('modulatedWave').style.display = 'block';
        }
        
        if (this.showDemodulation) {
            this.generateDemodulatedWaveform();
            document.getElementById('demodulatedWave').style.display = 'block';
        }
    }
    
    generateBinaryWaveform() {
        const canvas = this.binaryCanvas;
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const width = canvas.width;
        const height = canvas.height;
        const centerY = height / 2;
        const amplitude = height * 0.3;
        const bitDuration = width / this.binaryData.length;
        
        // Draw grid
        this.drawGrid(ctx, width, height);
        
        // Draw binary data waveform
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        for (let i = 0; i < this.binaryData.length; i++) {
            const bit = parseInt(this.binaryData[i]);
            const x1 = i * bitDuration;
            const x2 = (i + 1) * bitDuration;
            const y = bit === 1 ? centerY - amplitude : centerY + amplitude;
            
            if (i === 0) ctx.moveTo(x1, y);
            else ctx.lineTo(x1, y);
            ctx.lineTo(x2, y);
        }
        ctx.stroke();
        
        // Add labels
        this.addLabels(ctx, 'Binary Data', '1', '0', centerY, amplitude);
    }
    
    generateCarrierWaveform() {
        const canvas = this.carrierCanvas;
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const width = canvas.width;
        const height = canvas.height;
        const centerY = height / 2;
        
        // Draw grid
        this.drawGrid(ctx, width, height);
        
        // Draw carrier signal
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        const cycles = 4;
        for (let x = 0; x < width; x++) {
            const y = centerY + Math.sin((x / width) * Math.PI * cycles * 2) * (this.carrierAmplitude * 2);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        // Add labels
        ctx.fillStyle = '#374151';
        ctx.font = '14px Arial';
        ctx.fillText(`Carrier Signal (${this.carrierFrequency}Hz)`, 10, 20);
        ctx.fillText(`${this.carrierAmplitude}V`, 10, height - 10);
    }
    
    generateModulatedWaveform() {
        const canvas = this.modulatedCanvas;
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const width = canvas.width;
        const height = canvas.height;
        const centerY = height / 2;
        const bitDuration = width / this.binaryData.length;
        
        // Draw grid
        this.drawGrid(ctx, width, height);
        
        // Draw BPSK modulated signal
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        const cycles = 4;
        for (let x = 0; x < width; x++) {
            const bitIndex = Math.floor(x / bitDuration);
            const bit = bitIndex < this.binaryData.length ? parseInt(this.binaryData[bitIndex]) : 0;
            const phase = bit === 1 ? 0 : Math.PI;
            const y = centerY + Math.sin((x / width) * Math.PI * cycles * 2 + phase) * (this.carrierAmplitude * 2);
            
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        // Add phase indicators
        ctx.fillStyle = '#10b981';
        ctx.font = '12px Arial';
        for (let i = 0; i < this.binaryData.length; i++) {
            const bit = parseInt(this.binaryData[i]);
            const x = i * bitDuration + bitDuration / 2;
            ctx.fillText(`φ=${bit === 1 ? '0°' : '180°'}`, x - 15, 25);
        }
        
        ctx.fillStyle = '#374151';
        ctx.font = '14px Arial';
        ctx.fillText('BPSK Modulated Signal', 10, height - 25);
    }
    
    generateDemodulatedWaveform() {
        const canvas = this.demodulatedCanvas;
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const width = canvas.width;
        const height = canvas.height;
        const centerY = height / 2;
        const amplitude = height * 0.3;
        const bitDuration = width / this.binaryData.length;
        
        // Draw grid
        this.drawGrid(ctx, width, height);
        
        // Draw demodulated signal
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        for (let i = 0; i < this.binaryData.length; i++) {
            const bit = parseInt(this.binaryData[i]);
            const x1 = i * bitDuration;
            const x2 = (i + 1) * bitDuration;
            const y = bit === 1 ? centerY - amplitude : centerY + amplitude;
            
            if (i === 0) ctx.moveTo(x1, y);
            else ctx.lineTo(x1, y);
            ctx.lineTo(x2, y);
        }
        ctx.stroke();
        
        // Add labels
        this.addLabels(ctx, 'Demodulated Output', '1', '0', centerY, amplitude);
    }
    
    drawGrid(ctx, width, height) {
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const y = (height / 4) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
    }
    
    addLabels(ctx, title, highLabel, lowLabel, centerY, amplitude) {
        ctx.fillStyle = '#374151';
        ctx.font = '14px Arial';
        ctx.fillText(title, 10, 20);
        ctx.fillText(highLabel, 10, centerY - amplitude - 5);
        ctx.fillText(lowLabel, 10, centerY + amplitude + 15);
    }
    
    updateFrequencyDisplay() {
        this.freqValue.textContent = this.carrierFrequency;
        this.infoFreq.textContent = this.carrierFrequency;
    }
    
    updateAmplitudeDisplay() {
        this.ampValue.textContent = this.carrierAmplitude;
        this.infoAmp.textContent = this.carrierAmplitude;
    }
    
    nextStep() {
        if (this.currentStep < this.steps.length - 1) {
            this.currentStep++;
            this.updateDisplay();
            this.speakHindi(this.steps[this.currentStep].hindi);
        }
    }
    
    resetSimulation() {
        this.currentStep = 0;
        this.showDemodulation = false;
        
        // Hide all waveforms
        document.getElementById('binaryWave').style.display = 'none';
        document.getElementById('carrierWave').style.display = 'none';
        document.getElementById('modulatedWave').style.display = 'none';
        document.getElementById('demodulatedWave').style.display = 'none';
        
        // Hide demodulation section
        document.getElementById('demodulatorSection').style.display = 'none';
        document.getElementById('demodInfo').style.display = 'none';
        
        this.updateDisplay();
        this.speakHindi(this.steps[0].hindi);
    }
    
    startDemodulation() {
        this.showDemodulation = true;
        
        // Show demodulation section
        document.getElementById('demodulatorSection').style.display = 'block';
        document.getElementById('demodInfo').style.display = 'block';
        
        // Show demodulation signal flow
        document.getElementById('demodSignalFlow').style.display = 'block';
        document.getElementById('demodulationStatus').style.display = 'block';
        
        this.updateWaveforms();
        this.speakHindi('अब हम डिमॉड्यूलेशन सर्किट देखेंगे और मूल डेटा प्राप्त करेंगे।');
    }
    
    speakHindi(text) {
        if ('speechSynthesis' in window) {
            // Cancel any ongoing speech
            speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'hi-IN';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    }
}

// Initialize the simulator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new BPSKSimulator();
});
