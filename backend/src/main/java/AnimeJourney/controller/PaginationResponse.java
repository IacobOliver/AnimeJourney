package AnimeJourney.controller;

import lombok.Data;

@Data
public class PaginationResponse {
    private int page;
    private int numberOfItems;
    private String filter;
}
