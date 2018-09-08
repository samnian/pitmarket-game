class Player():
    """Store and manage data about a single player"""
    def __init__(self, player_id, is_seller):
        self.player_id = player_id
        self.ws = None
        self.is_seller = is_seller

    def give_card(self, card):
        self.card = card
