-- main.luau
-- This is the main script that would be loaded by the configuration.
-- In a real scenario, this file would contain the core logic for the in-game features.

-- For this demonstration, we will simply print the configuration that was passed from the web UI
-- to show that the settings have been received correctly.

local config = getgenv().ACRYLIC_CONFIG

if not config then
    print("ACRYLIC_CONFIG not found. Please run the loader script first.")
    return
end

print("--- Acrylic GUI Lite Configuration Loaded ---")
print(" ")

-- Print Fruit ESP settings
if config.fruitEsp then
    print("[Fruit ESP]")
    print("  Master Enabled: " .. tostring(config.fruitEsp.masterEnabled))
    if config.fruitEsp.masterEnabled then
        local enabledFruits = {}
        if config.fruitEsp.fruits then
            for fruit, enabled in pairs(config.fruitEsp.fruits) do
                if enabled then
                    table.insert(enabledFruits, fruit)
                end
            end
        end
        if #enabledFruits > 0 then
            print("  Enabled Fruits: " .. table.concat(enabledFruits, ", "))
        else
            print("  No fruits selected.")
        end
    end
else
    print("[Fruit ESP] - Not configured")
end

print(" ")

-- Print Auto Leveling settings
if config.autoLevel then
    print("[Auto Leveling]")
    print("  Enabled: " .. tostring(config.autoLevel.enabled))
    if config.autoLevel.enabled then
        print("  Target Level: " .. tostring(config.autoLevel.targetLevel))
        print("  Method: " .. tostring(config.autoLevel.method))
    end
else
    print("[Auto Leveling] - Not configured")
end

print(" ")
print("--- End of Configuration ---")
print("In a real script, the features would now be activated based on these settings.")
