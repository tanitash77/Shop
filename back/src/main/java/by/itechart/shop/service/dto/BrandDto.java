package by.itechart.shop.service.dto;

public class BrandDto {

    private Integer id;
    private String name;
    private String site;

    public BrandDto() {
    }

    public BrandDto(Integer id, String name, String site) {
        this.id = id;
        this.name = name;
        this.site = site;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

}
