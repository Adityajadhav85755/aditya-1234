import { useState } from 'react';

const data = [
  {
    category: "Installation/Re-installation",
    items: [
      { item: "1m copper pipe set (with insulation, wire)", price: "₹799" },
      { item: "Split AC Wall stand", price: "₹499" },
      { item: "Drain pipe (1m)", price: "₹69" },
      { item: "Fastener complete set", price: "₹159" },
      { item: "Floor stand", price: "₹699" },
      { item: "Universal back plate for Indoor unit", price: "₹359" }
    ]
  },
  {
    category: "Electrical Parts",
    items: [
      { item: "Replace sensor", price: "₹299" },
      { item: "Non-Inverter PCB repaired", price: "₹1399" },
      { item: "Capacitor 2-5 µF", price: "₹199" },
      { item: "Capacitor 10-25 µF", price: "₹359" },
      { item: "Capacitor 35-50 µF", price: "₹359" },
      { item: "Capacitor 50-60 µF", price: "₹359" },
      { item: "Dual Capacitor", price: "₹559" },
      { item: "Inverter PCB repaired", price: "₹3700" },
      { item: "Replace LVT", price: "₹799" },
      { item: "Contactor Daikin/ O-General", price: "₹1399" },
      { item: "Convert PCB with remote", price: "₹1459" }
    ]
  },
  {
    category: "Minor Parts",
    items: [
      { item: "Insulation refix", price: "₹20" },
      { item: "Drain pipe adjust", price: "₹30" },
      { item: "Noise adjustment in swing flop", price: "₹39" },
      { item: "Tighten/ Replace Thimble", price: "₹45" },
      { item: "Connector wires replaced (1m)", price: "₹89" },
      { item: "Adjust Grill Locks", price: "₹50" },
      { item: "Water Leakage Repaired", price: "₹349" },
      { item: "Adjust pipe and tight compressor screw", price: "₹50" }
    ]
  },
  {
    category: "Gas Charging",
    items: [
      { item: "Condensor or copper coil repair", price: "₹350" },
      { item: "Copper Coil Condensor 1.5 ton Split", price: "₹3500" },
      { item: "Flair nut replaced", price: "₹150" },
      { item: "Copper Coil Condensor 2 ton Split", price: "₹3999" },
      { item: "Copper Coil Condensor 1 ton Split", price: "₹2999" },
      { item: "Copper Cooling Coil (Split AC)", price: "₹5499" },
      { item: "Copper Cooling Coil (Window AC)", price: "₹3999" },
      { item: "Compressor 0.8-1 ton", price: "₹5999" },
      { item: "Expansion valve replaced", price: "₹999" },
      { item: "Service valve replaced", price: "₹299" },
      { item: "Capillary and Filter replaced", price: "₹299" },
      { item: "Compressor 1.5 ton", price: "₹6999" },
      { item: "Compressor 2 ton", price: "₹8999" },
      { item: "Gas Charging", price: "₹2199" },
      { item: "Dead nut (1 pc)", price: "₹50" },
      { item: "Cooling coil U Band", price: "₹50" },
      { item: "Pin Valve for window AC", price: "₹50" }
    ]
  },
  {
    category: "Fans/Motors",
    items: [
      { item: "Fan motor outdoor", price: "₹1499" },
      { item: "Blower motor replaced", price: "₹1999" },
      { item: "Blower replaced", price: "₹900" },
      { item: "Replace flap/Swing Motor", price: "₹249" },
      { item: "DC Fan Motor (Outdoor Unit)", price: "₹2999" },
      { item: "DC Fan Motor (Indoor Unit)", price: "₹3000" }
    ]
  },
  {
    category: "Other Parts",
    items: [
      { item: "AC fan blade", price: "₹599" },
      { item: "Swing blade replaced", price: "₹349" },
      { item: "Grill Cover", price: "₹1149" },
      { item: "Universal remote", price: "₹679" },
      { item: "Compressor grommets set", price: "₹259" },
      { item: "Rubber washer (1 pc)", price: "₹50" },
      { item: "Water Tray", price: "₹439" },
      { item: "Sleeves (per piece)", price: "₹50" },
      { item: "Stabilizer Repair (up to single boost)", price: "₹1400" },
      { item: "Stabilizer Repair (up to Double boost)", price: "₹2200" },
      { item: "External dust/stick removal", price: "₹0" },
      { item: "AC cover removed/fixed", price: "₹0" },
      { item: "Electrical contact fixing", price: "₹0" },
      { item: "Temperature/remote setting", price: "₹0" },
      { item: "Electrical Plug adjust", price: "₹50" },
      { item: "Stabilizer connected", price: "₹0" },
      { item: "Noise adjustment in motor", price: "₹0" },
      { item: "Noise adjustment in Blower", price: "₹0" },
      { item: "Noise adjustment", price: "₹0" }
    ]
  }
];

function Ac_Service_home_drop() {
  const [isVisible, setIsVisible] = useState({
    estimatePriceList: true,
    installation: true,
    electricalParts: true,
    minorParts: true,
  });

  const toggleVisibility = (section) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="pt-3 px-4 pb-3 bg-white w-full">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => toggleVisibility('estimatePriceList')}
      >
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-new-background-secondary-color">
          <img
            src="https://assets.nobroker.in/hs-new/public/Home-Services/listChecks.svg"
            alt="List Checks"
            className="w-6 h-6"
          />
        </div>
        <h2 className="font-semibold text-lg">Estimate price list</h2>
        <img
          className="ml-auto transition-transform duration-200"
          src="https://assets.nobroker.in/hs-new/public/Home-Services/right-icon.svg"
          alt="List Toggle"
          style={{
            transform: isVisible.estimatePriceList ? 'rotate(-90deg)' : 'rotate(90deg)',
          }}
        />
      </div>

      {isVisible.estimatePriceList && (
        <div className="pt-6 px-1 py-3 w-full bg-white rounded-lg">
          {data.map((category, index) => (
            <div
              key={index}
              className="mb-3 rounded-lg"
              style={{
                backgroundColor: 'rgb(242, 242, 244)',
                border: '1px solid rgb(232, 236, 238)',
                borderRadius: '8px',
              }}
            >
              <div
                className="flex items-center justify-between p-2 text-base cursor-pointer"
                onClick={() => toggleVisibility(category.category)}
              >
                <span style={{ color: 'rgb(0, 0, 139)' }}>{category.category}</span>
                <img
                  className="ml-auto transition-transform duration-200"
                  src="https://assets.nobroker.in/hs-new/public/Home-Services/right-icon.svg"
                  alt="List Toggle"
                  style={{
                    transform: isVisible[category.category] ? 'rotate(-90deg)' : 'rotate(90deg)',
                  }}
                />
              </div>
              {isVisible[category.category] && (
                <div
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid rgb(135, 206, 235)',
                    borderTop: 'none',
                    borderRadius: '8px 8px 0 0',
                  }}
                >
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 text-base"
                      style={{
                        borderBottom: '1px solid rgb(232, 236, 238)',
                      }}
                    >
                      <span>{item.item}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Ac_Service_home_drop;
