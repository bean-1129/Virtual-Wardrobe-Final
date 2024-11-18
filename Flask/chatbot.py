import json
import os

# Load the JSON dataset with error handling
def load_recommendations():
    try:
        with open("clothing_recommendations.json", "r") as file:
            data = json.load(file)
        return data
    except FileNotFoundError:
        print("Error: 'clothing_recommendations.json' file not found. Please make sure the file is in the same directory as this script.")
        return None
    except json.JSONDecodeError:
        print("Error: JSON file is improperly formatted. Please check for syntax errors.")
        return None

# Function to get clothing recommendations
def get_clothing_recommendation(event, style="Indian", gender="Male"):
    recommendations = load_recommendations()
    if not recommendations:
        return "Unable to load recommendations. Please check the JSON file."

    event = event.lower()
    style_key = f"{style} Attire"

    # Find recommendations for the event and gender
    for item in recommendations:
        if item["Event"].lower() == event:
            attire = item.get(style_key, {}).get(gender.capitalize())
            if attire:
                return attire
            else:
                return f"No {style} attire recommendations available for {gender.lower()}."
    
    return "I'm not sure about this event. Could you specify it more clearly?"

# Chatbot conversation loop
def clothing_recommendation_chatbot():
    print("Welcome to the Virtual Wardrobe Chatbot!")
    print("You can ask for clothing recommendations by event, style (Indian or Western), and gender (Male or Female).\n")

    while True:
        # Get input from the user
        event = input("Enter the event (e.g., wedding, office, party, etc.) or type 'exit' to quit: ").strip()
        if event.lower() == "exit":
            print("Thank you for using the Virtual Wardrobe Chatbot. Goodbye!")
            break

        # Get the style preference
        style = input("Enter the style preference (Indian or Western): ").strip().capitalize()
        if style not in ["Indian", "Western"]:
            print("Please enter a valid style: 'Indian' or 'Western'.")
            continue

        # Get the gender
        gender = input("Enter your gender (Male or Female): ").strip().capitalize()
        if gender not in ["Male", "Female"]:
            print("Please enter a valid gender: 'Male' or 'Female'.")
            continue

        # Get recommendation
        recommendation = get_clothing_recommendation(event, style, gender)
        print(f"\nRecommended {style} attire for {gender.lower()} at {event.capitalize()}: {recommendation}\n")

# Run the chatbot
clothing_recommendation_chatbot()