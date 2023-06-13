from math import ceil, floor

class PaginationHelper:

    # The constructor takes in an array of items and an integer indicating
    # how many items fit within a single page
    def __init__(self, collection, items_per_page):
        self.collection = collection
        self.items_per_page = items_per_page

        self.number_of_items = len(self.collection)
        self.number_of_pages = ceil(self.number_of_items / self.items_per_page)


    # returns the number of items within the entire collection
    def item_count(self):
        return self.number_of_items

    # returns the number of pages
    def page_count(self):
        return self.number_of_pages

    # returns the number of items on the given page. page_index is zero based
    # this method should return -1 for page_index values that are out of range
    def page_item_count(self, page_index):
        if page_index < 0 or page_index > self.number_of_pages - 1 or not self.number_of_items:
            return -1

        if page_index < self.number_of_pages - 1:
            return self.items_per_page

        return self.number_of_items - (self.items_per_page * (self.number_of_pages - 1))

    # determines what page an item at the given index is on. Zero based indexes.
    # this method should return -1 for item_index values that are out of range
    def page_index(self, item_index):
        if item_index < 0 or item_index > self.number_of_items - 1 or not self.number_of_items:
            return -1

        return floor(item_index / self.items_per_page)
