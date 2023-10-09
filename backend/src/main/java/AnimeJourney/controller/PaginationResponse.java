package AnimeJourney.controller;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PaginationResponse {
    private int page;
    private int numberOfItems;
    private String filter;
    private String filterValue;
}
