// mechatronic

interface Microchip {
    type: string;
    model: string;
    manufacturer: string;
    specs: {
        speed: number; // MHz
        memory: number; //  KB
        powerConsumption: number; // Watts
    };
}

interface PIC16 extends Microchip {
    type: 'PIC-16';
    specs: {
        speed: 20; //  speed 
        memory: 8; // memory
        powerConsumption: 0.5; // Specific power consumption for PIC-16
    };
}


interface ARMCortex extends Microchip {
    type: 'ARM Cortex';
    specs: {
        speed: 100; 
        memory: 256; 
        powerConsumption: 1; 
    };
}

// Atmel AVR
interface AtmelAVR extends Microchip {
    type: 'Atmel AVR';
    specs: {
        speed: 16;  
        memory: 32; 
        powerConsumption: 0.2;
    };
}

type MicrochipType = PIC16 | ARMCortex | AtmelAVR;
function findPerfectMicrochips(speedRequired: number, memoryRequired: number, maxPower: number): MicrochipType[] {
    const microchips: MicrochipType[] = [
        {
            type: 'PIC-16',
            model: 'PIC-16F877A',
            manufacturer: 'Microchip',
            specs: {
                speed: 20,
                memory: 8,
                powerConsumption: 0.5,
            }
        },
        {
            type: 'ARM Cortex',
            model: 'STM32F407',
            manufacturer: 'STMicroelectronics',
            specs: {
                speed: 100,
                memory: 256,
                powerConsumption: 1,
            }
        },
        {
            type: 'Atmel AVR',
            model: 'ATmega328P',
            manufacturer: 'Microchip',
            specs: {
                speed: 16,
                memory: 32,
                powerConsumption: 0.2,
            }
        },
    ];

    const perfectMicrochips = microchips.filter(chip => {
        return chip.specs.speed >= speedRequired
            && chip.specs.memory >= memoryRequired
            && chip.specs.powerConsumption <= maxPower;
    });

    return perfectMicrochips;
}
const speedRequirement = 20; // MHz
const memoryRequirement = 8; // KB
const maxPowerConsumption = 1; // watts

const perfectMicrochips = findPerfectMicrochips(speedRequirement, memoryRequirement, maxPowerConsumption);
console.log('Perfect Microchips:', perfectMicrochips);